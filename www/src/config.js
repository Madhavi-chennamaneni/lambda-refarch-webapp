// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "oq40r9cerj35k99oj3lacd7p4",     // CognitoClientID
  "api_base_url": "https://obqn84b8zb.execute-api.ap-south-1.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-todo-app.auth.ap-south-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1hef5i7wx6c4i.amplifyapp.com"                                      // AmplifyURL
};

export default config;