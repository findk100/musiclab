export interface song {

    album_name:string;
    song_name:string;
    singer_name:string;
    composer_name:string
}

songs:()=>any;

class songs implements song {
   public album_name:string =""
   public song_name:string =""
   public singer_name:string =""
   public composer_name:string =""
    constructor( album_name:string, song_name:string, singer_name:string,omposer_name:string){
        this.album_name=album_name;
        this.song_name=song_name;
        this.singer_name=singer_name;
        this.composer_name=song_name;

      
    }
    target1(event:any){
        this.album_name= event.target.value;
    }
    target2(event:any){
        this.song_name = event. target.value

    }
    target3(event:any){
        this.singer_name = event.target.value
     }

     target4(event:any){
         this.composer_name = event.target.value
     }
    

     adddata(){
         ([this.album_name,this.song_name,this.singer_name,this.composer_name])
     }



}