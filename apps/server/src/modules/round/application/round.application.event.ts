export namespace RoundApplicationEvent {
  export namespace RoundCreated {
    export const key = 'round.application.round.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
