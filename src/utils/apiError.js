class apiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        error =  [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.error = error
        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this,this.Constructor)
        }
    }
}
export {apiError}