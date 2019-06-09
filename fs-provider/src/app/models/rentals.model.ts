export class rental {
    public location: string;
    public pricePerNight: number;
    public houseName: string;
    public hostName: string;
    public imageUrl: string;
    public id: number;
    public providerId: number;


    constructor() {
        this.location = "";
        this.pricePerNight = 0;
        this.houseName = "";
        this.hostName = "";
        this.imageUrl = "";
        this.id = 0;
        this.providerId = 0;
    }
}