import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";

export class LambdaLayersStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const { service, stage } = props?.tags!;

    // const databaseArn = this.node.tryGetContext("db");

    const mainDbArnSecret = process.env.DB_MAIN_ARN || "";
    const devDbArnSecret = process.env.DB_DEV_ARN || "";

    // if (!databaseArn) {
    //   throw new Error("Database ARN is not provided in context parameters.");
    // }

    console.log("DATABASE ARN >>> ", mainDbArnSecret);
    console.log("DATABASE ARN >>> ", devDbArnSecret);

    // const bucket = new s3.Bucket(this, `${service}-${stage}-bucket`, {
    //   bucketName: `${service}-${stage}-bucket`,
    //   removalPolicy: cdk.RemovalPolicy.RETAIN,
    //   versioned: true,
    // });

    // const layer = new lambda.LayerVersion(this, `${service}-${stage}-layer`, {
    //   layerVersionName: `${service}-${stage}-layer`,
    //   code: lambda.Code.fromAsset("lambda-layers"),
    //   compatibleRuntimes: [lambda.Runtime.NODEJS_18_X],
    // });

    // new s3deploy.BucketDeployment(this, `${service}-${stage}-deployment`, {
    //   sources: [s3deploy.Source.asset("./lambda-layers")],
    //   destinationBucket: bucket,
    // });

    // const layerLambda = new lambda.Function(
    //   this,
    //   `${service}-${stage}-function`,
    //   {
    //     functionName: `${service}-${stage}-function`,
    //     runtime: lambda.Runtime.NODEJS_18_X,
    //     code: lambda.Code.fromAsset("lambda"),
    //     handler: "hello.handler",
    //     layers: [layer],
    //   }
    // );

    // new cdk.CfnOutput(this, `${service}-${stage}-bucket-output`, {
    //   value: bucket.bucketName,
    //   exportName: "lambdalayerstackstack-layerbucketf5b16ca1-1o5ztngm5m6zl",
    // });

    // new cdk.CfnOutput(this, `${service}-${stage}-Arn`, {
    //   value: layer.layerVersionArn,
    //   exportName:
    //     "arn:aws:lambda:us-west-1:911519397586:layer:MyLayer38944FA5:1",
    // });

    // new cdk.CfnOutput(this, `${service}-${stage}-db-creds`, {
    //   value: databaseArn,
    //   exportName: "db-creds",
    // });
  }
}
