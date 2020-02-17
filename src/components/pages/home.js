import React, { Component} from "react";




export default class Home extends Component{
    constructor(){
        super();
        this.state={
            banner_text:["TEST 1","TEST 2","TEST 3"],
            active_text:"TEST",
            count:0
        }
        this.changeText = this.changeText.bind(this);
    }
    changeText(){
        let count=this.state.count;
        if (count == this.state.banner_text.length-1){
            count =0;
        }
        else{
            count+=1;
        }
        this.setState({
            active_text:this.state.banner_text[this.state.count],
            count:count
        })
    }

    componentDidMount(){
        this.interval = setInterval(() => this.changeText(), 10000);
    }

    render(){
        return(
            <div className="title-bar">
                <div className="home-item" id="first">
                    <h2>{this.state.active_text}</h2>
                    <button type="text" id="down-chevron">{`\u2304`}</button>
                </div>
                <div className="home-item">
                    <h1>HOME PAGE 1</h1>
                    <p>
                        Big Tuna is a super ambitious guy, you know? Cut your throat to get ahead kind of guy, but I mean I'm not threatened by him. I went to Cornell, you ever heard of it. I graduated in four years. I never studied once. I was drunk the whole time, and I sang in the acappella group, 'Here Comes Treble.'
    
                        Here's the thing. When a company screws up, best thing to do is call a press conference. Alert the media and then you control the story. Wait for them to find out, and the story controls you. That's what happened to O.J.
                        
                        I'm a deer hunter. I go all the time with my dad. One thing about deer: they have very good vision. One thing about me: I'm better at hiding, than they are at vision.
                    </p>
                </div>
                <div className="home-item">
                    <h1>HOME PAGE 2</h1>
                    <p>
                        First rule in road-side beet sales, put the most attractive beets on top. The ones that make you pull the car over and go, 'Wow. I need this beet right now.' Those are the money beets.
                        
                        Jim is my enemy. But it turns out that Jim is also his own worst enemy. And the enemy of my enemy is my friend. So Jim, is actually my friend. But, because he is his own worst enemy, the enemy of my friend is my enemy so actually Jim is my enemy. But--
                            
                        Oscar visited Mexico when he was five to attend his great-grandmothers funeral. What does that mean to the United States law enforcement officer? He's a potential drug mule.                   
                    </p>
                </div>
                <div className="home-item">
                    <h1>HOME PAGE 3</h1>
                    <p>
                        I don't have a ton of contact with the Scranton branch, but before I left I took a box of Dwight's stationary. So, from time to time I send Dwight faxes. From himself. From the future.
    
                        I don't have a ton of contact with the Scranton branch, but before I left I took a box of Dwight's stationary. So, from time to time I send Dwight faxes. From himself. From the future.
                        
                        The new receptionist is also named Kelly. So Kelly Kapour has decided to hover around my desk so that she can run into Charles' office every time he calls for Kelly. She thinks that if she says 'you wanted me' enough he will in fact want her. It's not the worst plan shes ever had.
                    </p>
                </div>
                <div className="home-item">
                    <h1>HOME PAGE 4</h1>
                    <p>
                        I begged Dwight and Jim to give me Erin for Secret Santa. And I decided to give Erin the 12 days of Christmas. Is it my fault that the first eight days is basically 30 birds?
    
                        Oh, it is on like a prawn who yawns at dawn.
                        
                        You give me a gift? Bam! Thank You note. You invite me somewhere? Pow! RSVP. You do me a favor? Wham! Favor returned. Do not test my politeness.
                        
                        OK. Who put my calculator in Jell-O? Good one. But uh, seriously, guys who did this? Seriously guys, who did this? I need to know who put my calculator in Jell-O, or I'm gonna lose my freaking mind!                    
                    </p>
                </div>
                
            </div>
            
        )
    }
}