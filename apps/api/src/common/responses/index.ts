export default class CoreResponse {
  success: boolean;
  transactionId: string;
  message: string | null;
  remarks: string | null;
  timestamp: number;

  constructor(
    _success: boolean,
    _transactionId: string,
    _message: string | null,
    _remarks: string | null,
  ) {
    this.success = _success;
    this.transactionId = _transactionId;
    this.message = _message;
    this.remarks = _remarks;
    this.timestamp = new Date().getTime() / 1000;
  }
}
