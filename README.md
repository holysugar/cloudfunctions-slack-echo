# cloudfunctions-slack-echo

Simple integration example of Slack slash commands with Google Cloud Functions


## configuration

### Cloud Functions

- trigger: HTTP Trigger ( and use trigger URL in the Slack configuration )
- entry point: 'echo'

### Slack command

- URL: cloud functions http trigger URL
- Method: POST

