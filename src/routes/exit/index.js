import { h, Component } from 'preact';
const storage = JSON.parse(sessionStorage.getItem('getmyhealth'))

const Exit = () => (
	<div class="exit">
		<div class="exit-title">
		  <h3>Congratulations!</h3>
		  <h2>Here are your results</h2>
		</div>
		<div class="iframe">
			<iframe src="http://staging.cpcman.torchte.ch/fetch/renderPage?site=5&zip=92562&affid=1127&placement_id2=-unazqFOgzKf3HdVQUJtDxKkn9zo9A&displayId=16801&publisherId=40823&vmProdId=501&zipcode=92562&param1=227882&param2=268397&param3=3530&placement_id=SEewkn2o09k-rPuZ3GbjpZ8EU7fing&sub_id1=802214&sub_id2=dfe5abe9-4056-4cd2-b098-4a598a8fbf52&sub_id3=sub_id3&ip=73.160.81.219&user_agent=Mozilla%2F5.0+%28Windows+NT+10.0%3B+Win64%3B+x64%3B+rv%3A67.0%29+Gecko%2F20100101+Firefox%2F67.0&dob=1954-10-06&gender=F&first_name=SHERRY&last_name=SALLS&address=23693+CANYON+OAK+DR&lead_id=CB437C36-1E56-7A59-9AB9-D105DE5C9725" frameBorder="0"></iframe>
		</div>
	</div>
);

export default Exit;
