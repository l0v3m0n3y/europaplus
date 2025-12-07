class europaplus{
    constructor(){
        this.api ="https://europaplus.ru/api"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json","Host":"europaplus.ru","Origin":"https://europaplus.ru","Referer":"https://europaplus.ru/"}
    }
    async main_page(){
        let req=await fetch(`${this.api}/main`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async get_playlist(date,start,finish){
        let req=await fetch(`${this.api}/playlist?channel=ep&date={date}&time_start={start}&time_finish={finish}`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async programs_list(){
        let req=await fetch(`${this.api}/programs`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async get_program(slug){
        let req=await fetch(`${this.api}/program/${slug}`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async photo_list(category){
        let req=await fetch(`${this.api}/photos?category=${category}`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async video_list(category){
        let req=await fetch(`${this.api}/videos?category=${category}`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async get_news(){
        let req=await fetch(`${this.api}/news`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async horoscope_list(){
        let req=await fetch(`${this.api}/horoscope`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async get_podcast(slug,limit){
        let req=await fetch(`${this.api}/podcast/${slug}?limit=${limit}`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async podcast_list(){
        let req=await fetch(`${this.api}/podcasts`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async get_dj(id){
        let req=await fetch(`${this.api}/djs/${id}`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async singers_list(page=1){
        let req=await fetch(`${this.api}/singers?page=${page}`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async get_singers(slug){
        let req=await fetch(`${this.api}/singers/${slug}`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async dj_list(){
        let req=await fetch(`${this.api}/djs`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async news_cinema(limit,page){
        let req=await fetch(`${this.api}/newscinema?limit=${limit}&page=${page}`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async cities_list(limit){
        let req=await fetch(`${this.api}/cities?limit=${limit}`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async find_cities(limit,name){
        let req=await fetch(`${this.api}/cities?limit=${limit}&city_name=${name}`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async category_news(limit,page,category){
        let req=await fetch(`${this.api}/news?limit=${limit}&page=${page}&category_id=${category}`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async search_in_site(query){
        let req=await fetch(`${this.api}/search/hint?query=${query}`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async get_schedule(){
        let req=await fetch(`${this.api}/schedule`,{method:"GET",headers: this.headers});
        return req.json()
    }
}
module.exports = {europaplus};
