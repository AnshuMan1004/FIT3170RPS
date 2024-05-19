export namespace ResultApplicationEvent {
  export namespace ResultCreated {
    export const key = 'result.application.result.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
