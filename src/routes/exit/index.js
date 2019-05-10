import { h, Component } from 'preact';
const storage = JSON.parse(sessionStorage.getItem('cpcman'))
const {home_zip, ip_address, user_agent, dob, gender, sub_id1, sub_id2, sub_id3, name_first, name_last, home_street, universal_leadid, client_name} = storage;
const Exit = () => (
	<div class="exit">
		<div class="exit-title">
		  <h3>Congratulations!</h3>
		  <h2>Here are your results</h2>
		</div>
		<div class="iframe">
		<iframe src={`http://cpcman.torchte.ch/fetch/renderPage?site=30&zip=${home_zip}&affid=${client_name}&placement_id2=-unazqFOgzKf3HdVQUJtDxKkn9zo9A&displayId=16801&publisherId=40823&vmProdId=501&zipcode=${home_zip}&param1=227882&param2=268397&param3=3530&placement_id=SEewkn2o09k-rPuZ3GbjpZ8EU7fing&sub_id1=${sub_id1}&sub_id2=${sub_id2}&sub_id3=${sub_id3}&ip=${ip_address}&user_agent=${user_agent}&dob=${dob}&gender=${gender}&first_name=${name_first}&last_name=${name_last}&address=${home_street}&lead_id=${universal_leadid}"`} frameBorder="0"></iframe>
		</div>
	</div>
);

export default Exit;
