export default function Contact(){
    return `
<form action="https://formspree.io/v.m.stake@gmail.com" method="POST">

    <div> 
        <input type="text" name="firstname" placeholder="First Name" autofocus required>
        <input type="text" name="lastname" placeholder="Last Name" required> <br>
        <input type="email" name="userEmail" placeholder="E-mail" required>
        <input type="number" name="phone" placeholder="Phone #">
    </div><br>

    <div><label id="question">What's this message about?<br>
      <input type="radio" name="subject" value="professional"><span>Job Inquiry</span><br>
      <input type="radio" name="subject" value="personal"><span>Personal comment and/or question</span><br>
      <input type="radio" name="subject" value="other"><span>Something else</span><br>
    </label></div><br>
    
    <div><label for="subscribe">Interested in recievieving updates? <br>
    <input type="checkbox" name="optin" value="trusting">Yes, subscribe me to your newsletter! <br>
    <input type="checkbox" name="optout" value="skeptical">No thanks, I'm good!<br>
    </label></div><br>

    <div><label for="marketing">How did you hear about me?</label><br>
    <select name="marketing">
      <optgroup label="Online">
        <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
        <option value="github">Online Portfolio (GitHub)</option>
        <option value="search">Search Engine</option>
        <option value="email">Email</option>
      </optgroup>
      <optgroup label="In-Person">
        <option value="networking">We met at a networking event</option>
        <option value="referral">Personal referral</option>
        <option value="random">We met somewhere else</option>
      </optgroup>
      <option value="other">Other</option>
    </select></div><br>
  
    <textarea name="user_message" rows="8" cols="40"     accesskey="" placeholder="Additional information"></textarea> <br>
    <input type="submit">

  </form>
`;
}