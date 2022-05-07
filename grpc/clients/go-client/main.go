package main

import (
	"context"
	"fmt"
	"google.golang.org/grpc"
	"grpc/pb"
	"log"
	"time"
)

func main() {

	// Create our context
	ctx := context.Background()
	// Setup connection
	conn, err := grpc.DialContext(ctx, "localhost:7777", grpc.WithInsecure())
	if err != nil {
		log.Fatal(err)
	}
	// Close connection when we are done
	defer conn.Close()
	// Use the generated NewHardwareMonitorClient method and pass our Connection
	client := pb.NewLiveCommentsClient(conn)

	// Call Monitor to receive the Stream of data
	// With an empty request
	req := &pb.GetCommentsRequest{ThreadId: "123"}
	// call Monitor function, this will return a stream of data
	stream, err := client.GetComments(ctx, req)
	if err != nil {
		panic(err)
	}
	// Create a timer to cancel
	stop := time.NewTicker(7 * time.Second)
	// Itterate stream
	for {
		select {
		case <-stop.C:
			// Tell the Server to close this Stream, used to clean up running on the server
			err := stream.CloseSend()
			if err != nil {
				log.Fatal("Failed to close stream: ", err.Error())
			}
			return
		default:
			// Recieve on the stream
			res, err := stream.Recv()
			if err != nil {
				panic(err)
			}
			fmt.Println("New Hardware state receieved")
			fmt.Println("ThreadId: ", res.ThreadId)
			fmt.Println("Id: ", res.Id)
			fmt.Println("Message : ", res.Message)
		}
	}
}
