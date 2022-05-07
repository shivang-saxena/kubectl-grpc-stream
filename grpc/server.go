package main

import (
	"context"
	"grpc/pb"
	"log"
	"math/rand"
	"time"
)

// Server is our struct that will handle the Hardware monitoring Logic
// It will fulfill the gRPC interface generated
type liveCommentsServer struct {
	pb.UnimplementedLiveCommentsServer
}

func (s *liveCommentsServer) CreateThread(ctx context.Context, in *pb.CreateThreadRequest) (*pb.Thread, error) {
	return nil, nil
}

// GetThread will Get thread of live comments system
func (s *liveCommentsServer) GetThread(ctx context.Context, in *pb.GetThreadRequest) (*pb.Thread, error) {
	return nil, nil
}

// CreateComment will create comments on live comments system
func (s *liveCommentsServer) CreateComment(ctx context.Context, in *pb.Comment) (*pb.Comment, error) {
	return nil, nil
}

// GetComments will stream the comments in real time
func (s *liveCommentsServer) GetComments(in *pb.GetCommentsRequest, stream pb.LiveComments_GetCommentsServer) error {
	timer := time.NewTicker(2 * time.Second)
	for {
		select {
		// Exit on stream context done
		case <-stream.Context().Done():
			return nil
		case <-timer.C:
			// Send the Hardware stats on the stream
			err := stream.Send(&pb.Comment{
				Id:        String(5),
				ThreadId:  String(10),
				Message:   "Hello from : " + String(3),
				Timestamp: nil,
			})
			if err != nil {
				log.Println(err.Error())
			}
		}
	}
}

func (s *liveCommentsServer) mustEmbedUnimplementedLiveCommentsServer() {
	return
}

const charset = "abcdefghijklmnopqrstuvwxyz" +
	"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

var seededRand *rand.Rand = rand.New(
	rand.NewSource(time.Now().UnixNano()))

func StringWithCharset(length int, charset string) string {
	b := make([]byte, length)
	for i := range b {
		b[i] = charset[seededRand.Intn(len(charset))]
	}
	return string(b)
}

func String(length int) string {
	return StringWithCharset(length, charset)
}
