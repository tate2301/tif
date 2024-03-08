import { SessionRequest, SessionResponse } from "./types";

interface ISession {
    checkout(data: SessionRequest, provider: PAYMENT_METHODS): Promise<SessionResponse>
    sessionStatus(sessionId: string): Promise<SessionResponse>
}

export class Session implements ISession {
    
}