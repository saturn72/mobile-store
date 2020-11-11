import moment from "moment";

export default {
    currentUtc: (): string => moment.utc().format()
}