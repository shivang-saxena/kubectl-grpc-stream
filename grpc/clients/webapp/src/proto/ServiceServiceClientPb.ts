/**
 * @fileoverview gRPC-Web generated client stub for main
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as service_pb from './service_pb';


export class liveCommentsClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateThread = new grpcWeb.MethodDescriptor(
    '/main.liveComments/CreateThread',
    grpcWeb.MethodType.UNARY,
    service_pb.CreateThreadRequest,
    service_pb.Thread,
    (request: service_pb.CreateThreadRequest) => {
      return request.serializeBinary();
    },
    service_pb.Thread.deserializeBinary
  );

  createThread(
    request: service_pb.CreateThreadRequest,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.Thread>;

  createThread(
    request: service_pb.CreateThreadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: service_pb.Thread) => void): grpcWeb.ClientReadableStream<service_pb.Thread>;

  createThread(
    request: service_pb.CreateThreadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: service_pb.Thread) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/main.liveComments/CreateThread',
        request,
        metadata || {},
        this.methodDescriptorCreateThread,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/main.liveComments/CreateThread',
    request,
    metadata || {},
    this.methodDescriptorCreateThread);
  }

  methodDescriptorGetThread = new grpcWeb.MethodDescriptor(
    '/main.liveComments/GetThread',
    grpcWeb.MethodType.UNARY,
    service_pb.GetThreadRequest,
    service_pb.Thread,
    (request: service_pb.GetThreadRequest) => {
      return request.serializeBinary();
    },
    service_pb.Thread.deserializeBinary
  );

  getThread(
    request: service_pb.GetThreadRequest,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.Thread>;

  getThread(
    request: service_pb.GetThreadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: service_pb.Thread) => void): grpcWeb.ClientReadableStream<service_pb.Thread>;

  getThread(
    request: service_pb.GetThreadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: service_pb.Thread) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/main.liveComments/GetThread',
        request,
        metadata || {},
        this.methodDescriptorGetThread,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/main.liveComments/GetThread',
    request,
    metadata || {},
    this.methodDescriptorGetThread);
  }

  methodDescriptorCreateComment = new grpcWeb.MethodDescriptor(
    '/main.liveComments/CreateComment',
    grpcWeb.MethodType.UNARY,
    service_pb.Comment,
    service_pb.Comment,
    (request: service_pb.Comment) => {
      return request.serializeBinary();
    },
    service_pb.Comment.deserializeBinary
  );

  createComment(
    request: service_pb.Comment,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.Comment>;

  createComment(
    request: service_pb.Comment,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: service_pb.Comment) => void): grpcWeb.ClientReadableStream<service_pb.Comment>;

  createComment(
    request: service_pb.Comment,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: service_pb.Comment) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/main.liveComments/CreateComment',
        request,
        metadata || {},
        this.methodDescriptorCreateComment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/main.liveComments/CreateComment',
    request,
    metadata || {},
    this.methodDescriptorCreateComment);
  }

  methodDescriptorGetComments = new grpcWeb.MethodDescriptor(
    '/main.liveComments/GetComments',
    grpcWeb.MethodType.SERVER_STREAMING,
    service_pb.GetCommentsRequest,
    service_pb.Comment,
    (request: service_pb.GetCommentsRequest) => {
      return request.serializeBinary();
    },
    service_pb.Comment.deserializeBinary
  );

  getComments(
    request: service_pb.GetCommentsRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<service_pb.Comment> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/main.liveComments/GetComments',
      request,
      metadata || {},
      this.methodDescriptorGetComments);
  }

}

