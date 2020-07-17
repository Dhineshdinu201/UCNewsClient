import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {
  title = 'newsTemplate';
  limit=350;
  completeWords="true";

  isContentToggled: boolean=false;
  nonEditedContent: string;
  content =
    'On-brand but completeley fresh ladder up / ladder back to the strategy and we are running out of runway but drive awareness to increase engagement can we parallel path or products need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved nor big picture. Circle back. Q1 are we in agreeance ladder up / ladder back to the strategy nor best practices paddle on both sides. Touch base land the plane can you ballpark the cost per unit for me. Work flows quick win meeting assassin, yet (lets not try to) boil the ocean (here/there/everywhere), usabiltiy, but out of the loop. Post launch reach out wiggle room, so we need to start advertising on social media. Hard stop. Churning anomalies organic growth. My capacity is full imagineer i am dead inside but move the needle not the long pole in my tent deep dive drink from the firehose. In an ideal world. Create spaces to explore whats next groom the backlog, guerrilla marketing accountable talk. Get six alpha pups in here for a focus group dunder mifflin.';
  ;
  constructor(){
    this.nonEditedContent = this.content;
    this.content = this.formatContent(this.content);
  }
  ngOnInit() {
    
  }
  toggleContent() {
    this.isContentToggled = !this.isContentToggled;
    this.content = this.isContentToggled ? this.nonEditedContent : this.formatContent(this.content);
  }

  formatContent(content: string) {
    if (this.completeWords) {
      this.limit = content.substr(0, this.limit).lastIndexOf(' ');
    }
    return `${content.substr(0, this.limit)}...`;
  }
}




