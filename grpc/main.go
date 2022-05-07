package main

import (
	"fmt"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"
	"grpc/pb"
	"log"
	"net"
	"net/http"
	"time"
)

func main() {

	fmt.Println("Welcome to Live commenting streaming")
	// Setup a tcp connection to port 7777
	lis, err := net.Listen("tcp", ":7777")
	if err != nil {
		panic(err)
	}
	// Create a gRPC server
	gRPCServer := grpc.NewServer()

	// Create a server object of the type we created in server.go
	s := &liveCommentsServer{}

	// Regiser our server as a gRPC server
	pb.RegisterLiveCommentsServer(gRPCServer, s)
	go func() {
		log.Fatal(gRPCServer.Serve(lis))
	}()

	// We need to wrap the gRPC server with a multiplexer to enable
	// the usage of http2 over http1
	grpcWebServer := grpcweb.WrapServer(gRPCServer)

	multiplex := grpcMultiplexer{
		grpcWebServer,
	}

	// a regular http router
	r := http.NewServeMux()
	// Load our React application
	webapp := http.FileServer(http.Dir("clients/webapp/.next"))
	// Host the web app at / and wrap it in a multiplexer
	r.Handle("/", multiplex.Handler(webapp))

	// create a http server with some defaults
	srv := &http.Server{
		Handler:      r,
		Addr:         "localhost:8080",
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	// host it
	log.Fatal(srv.ListenAndServe())
	//log.Println(gRPCServer.Serve(lis))

}

// grpcMultiplexer enables HTTP requests and gRPC requests to multiple on the same channel
// this is needed since browsers dont fully support http2 yet
type grpcMultiplexer struct {
	*grpcweb.WrappedGrpcServer
}

// Handler is used to route requests to either grpc or to regular http
func (m *grpcMultiplexer) Handler(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("JS client")
		enableCors(&w)
		if m.IsGrpcWebRequest(r) {
			m.ServeHTTP(w, r)
			return
		}
		next.ServeHTTP(w, r)
	})
}
func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
}
