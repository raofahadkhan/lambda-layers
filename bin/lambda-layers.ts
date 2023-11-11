#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { LambdaLayersStack } from "../lib/lambda-layers-stack";
const service = "livecart-products-api";
let stage;
const app = new cdk.App();

stage = "m";
new LambdaLayersStack(app, `${service}-${stage}`, {
  tags: {
    service,
    stage,
  },
});

stage = "d";
new LambdaLayersStack(app, `${service}-${stage}`, {
  tags: {
    service,
    stage,
  },
});
