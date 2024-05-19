export namespace PlayerApplicationEvent {
  export namespace PlayerCreated {
    export const key = 'player.application.player.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
