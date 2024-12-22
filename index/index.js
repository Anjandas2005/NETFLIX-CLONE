let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i &lt; accordian.length; i++) {
  accordian[i].addEventListener(&quot;click&quot;, function () {
    if (this.childNodes[1].classList.contains(&quot;fa-plus&quot;)) {
      this.childNodes[1].classList.remove(&quot;fa-plus&quot;);
      this.childNodes[1].classList.add(&quot;fa-times&quot;);
    } else {
      this.childNodes[1].classList.remove(&quot;fa-times&quot;);
      this.childNodes[1].classList.add(&quot;fa-plus&quot;);
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + &quot;px&quot;;
    }
  });
}