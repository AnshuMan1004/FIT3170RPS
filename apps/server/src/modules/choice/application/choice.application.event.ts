export namespace ChoiceApplicationEvent {
  export namespace ChoiceCreated {
    export const key = 'choice.application.choice.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
