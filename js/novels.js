console.log("novels js on")
// fire series variables
let fireBookImage = document.getElementById("fire-image");
let fireBookHeader = document.getElementById("fire-inner-header");
let fireBookBody = document.getElementById("fire-body");
// fire buttons
let fireBookBtnOne = document.getElementById("fire-book-1");
let fireBookBtnTwo = document.getElementById("fire-book-2");
let fireBuyBtn = document.getElementById("fire-buy-btn");
let fireShareBtn = document.getElementById("fire-share-btn");
let firePreviewBtn = document.getElementById("fire-preview-btn");

//lottie series variables
let lottieBookImage = document.getElementById("lottie-image");
let lottieBookBody = document.getElementById("lottie-book-body");
let lottieBookHeader = document.getElementById("lottie-inner-header");
//lottie buttons
let lottieBtnOne = document.getElementById("lottie-book-1");
let lottieBtnTwo = document.getElementById("lottie-book-2");
let lottieBtnThree = document.getElementById("lottie-book-3");
let lottieBuyBtn = document.getElementById("lottie-buy-btn");
let lottieShareBtn = document.getElementById("lottie-share-btn");
let lottiePreviewBtn = document.getElementById("lottie-preview-btn");



// fire text options
let fireBookHeaderOptions = ["\"Everbody at church ain't in church!\" - Mother Whatnot","D-o-u-g gets his!"];
let fireBookTextOptions = ["Preacher’s kids, Money and Melissa, have been going to church all of their lives; Wanza and Yteesha, not so much. But none of that matters if Mother Whatnot’s conviction is true: \“Everybody at church ain’t in church.\” Their lives intersect when Melissa, oh, so sweetly, steals Wanza’s ambitious, empire-building husband, Douglas, who happens to be promoting a star-studded mega concert as the grand gala for Fisk University’s Sesquicentennial Celebration. Douglas also chairs the Finance Committee at True Vine Ministries, Inc. where Melissa has aligned herself in order to get up-close-and-personal with Nashville’s rich and famous elite. It’s not the first time finance has turned to romance, but it certainly turns up the heat when they all find themselves—Dipped in the Fire—a story of great tragedy and great joy!", "Pastor Meadows summed up the situation. \"And it's not a good life plan to use women to feather your nest--be they black or white, rich or poor.\" But multi-millionaire, star music promoter, Douglas Grand, hasn't learned his lesson; at least, not yet. But D-O-U-G is gonna get his! Because no matter who you think you are, you always need to know who you're dealing with; or else you might find yourself--Double-Dipped in the Fire. But in the midst of it all, love lost can sometimes be found."];

//lottie text options
let lottieBookHeaderOptions = ["D.C. ain't got nothing on Old South politics!", "Yes miracles do happen!", "No love like married love!"];
let lottieBookBodyOptions = ["Lottie Garrett’s career as a partner in a New York investment firm is a far cry from her humble beginnings in the Deep South. Life is eerily calm until Lottie and her unlikely business partner, Raymond, are pitted in a life and death struggle against a masked murderer who chases them across three states. They land in Union City, Alabama, Lottie’s rural hometown, but Lottie hasn’t been home or seen her wise, homespun mother, Miss Charity, in over ten years. As tightly guarded family secrets collide, Miss Charity will be the best guide for Lottie and Raymond’s unexpected, soul-searching adventure, which leads to reconciliation, divine forgiveness and the release of bitterness. Filled with southern charm, a twist of mystery and a dash of suspense, Pickin’ Ground takes readers through a thorny murder plot that unravels through the very last page! Pickin’ Ground is the first book in the Lottie series.", "<em>\“Home is where we were before we had issues.\”</em> - In Due Season is the sequel to Pickin' Ground, and it follows after the murder mystery is solved. Lottie returns to her rural hometown, Union City, Alabama, to help her mother and to improve the conditions in her community. In the process of instituting a faith-based solution to the problems of youth crime and low educational achievement, Lottie stirs up a hornet’s nest of resentment and prejudice that leads to fear, division, and murder. However, in due season, Lottie discovers what her heart has longed for—true purpose and true love. She comes to realize that true love is made in your soul before your body gets involved. And, oh, yes...Miracles do happen!","Oh, no! Rose is back! If Lottie isn’t having enough trouble being a newlywed and taking on her duties as the first female African American Senator in her native state of Alabama, her sister Rose is trying to make the moves on her husband, Chaney. Rose has had a crush on Chaney since high school, and it looks like she’s not done yet. And in spite of her love for her community and her political pursuits, Lottie has to learn to open her heart and fight for her family. Family, however, is not always what it seems—family is the people who love us. Lottie, the third book in the Lottie Series, follows the murder mystery in Pickin' Ground, and the story of personal and community redemption in In Due Season. Lottie explores the fulfillment of marital love that overcomes selfish ambition, political corruption, and family pain."]

//fire image change
let fireChangeImage = function(string) {
  if(string === "fireBookOne") {
    fireBookImage.src="assets/resize/dipped-in-the-fire_250.JPG";
  };
  if(string === "fireBookTwo") {
    fireBookImage.src="assets/resize/double-dipped-in-the-fire_250.JPG";
  };
};

//lottie change image
let lottieChangeImage = function(string) {
  if(string === "lottieBookOne") {
    lottieBookImage.src="assets/resize/pickin-ground-orig_250.JPG";
  };
  if(string === "lottieBookTwo") {
    lottieBookImage.src="assets/resize/in-due-season-org_250.JPG";
  };
  if(string === "lottieBookThree") {
    lottieBookImage.src="assets/resize/lottie-orig_250.JPG"
  };
};

// fire series body text change
let fireChangeBody = function(string) {
  if(string === "fireBookOne") {
    fireBookHeader.innerHTML = fireBookHeaderOptions[0]
    fireBookBody.innerHTML = fireBookTextOptions[0];
  };
  if(string ==="fireBookTwo") {
    fireBookHeader.innerHTML = fireBookHeaderOptions[1];
    fireBookBody.innerHTML = fireBookTextOptions[1];
  };
};

// lottie change body
let lottieChangeBody = function(string) {
  if(string === "lottieBookOne") {
    lottieBookHeader.innerHTML = lottieBookHeaderOptions[0];
    lottieBookBody.innerHTML = lottieBookBodyOptions[0];
  };
  if(string === "lottieBookTwo") {
    lottieBookHeader.innerHTML = lottieBookHeaderOptions[1];
    lottieBookBody.innerHTML = lottieBookBodyOptions[1]
  };
  if(string === "lottieBookThree") {
    lottieBookHeader.innerHTML = lottieBookHeaderOptions[2];
    lottieBookBody.innerHTML = lottieBookBodyOptions[2];
  };
};

//fire change button
let fireChangeButtons = function(string) {
  if(string === "fireBookOne") {
    fireBuyBtn.href = "https://www.amazon.com/Dipped-Fire-Jeanetta-Britt/dp/0692650644/ref=pd_bxgy_img_1/132-9520400-7096537?pd_rd_w=9ipxC&pf_rd_p=c64372fa-c41c-422e-990d-9e034f73989b&pf_rd_r=RPGXVZ569P8DEA86GK4A&pd_rd_r=966f3157-87db-4e8a-8dfd-2542b668fdd6&pd_rd_wg=jknQm&pd_rd_i=0692650644&psc=1";
    fireShareBtn.href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.amazon.com%2FPickin-Ground-Jeanetta-Britt%2Fdp%2F1732707111%2Fref%3Dtmm_pap_swatch_0%3F_encoding%3DUTF8%26qid%3D%26sr%3D";
    firePreviewBtn.href = "https://read.amazon.com/kp/embed?asin=B01DO6A7KO&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_3RXWXWMMY13GET3NKP9Q";
  };
  if(string === "fireBookTwo") {
    fireBuyBtn.href = "https://www.amazon.com/Double-Dipped-Fire-Book-Two/dp/1732707103/ref=pd_sim_1/132-9520400-7096537?pd_rd_w=Jlyoz&pf_rd_p=6caf1c3a-a843-4189-8efc-81b67e85dc96&pf_rd_r=3RXWXWMMY13GET3NKP9Q&pd_rd_r=ba75c88c-4678-4dd9-b3f1-a6716fe1c97a&pd_rd_wg=ro7Uw&pd_rd_i=1732707103&psc=1";
    fireShareBtn.href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.amazon.com%2FDouble-Dipped-Fire-Book-Two%2Fdp%2F1732707103%2Fref%3Dpd_sim_1%2F132-9520400-7096537%3Fpd_rd_w%3DJlyoz%26pf_rd_p%3D6caf1c3a-a843-4189-8efc-81b67e85dc96%26pf_rd_r%3D3RXWXWMMY13GET3NKP9Q%26pd_rd_r%3Dba75c88c-4678-4dd9-b3f1-a6716fe1c97a%26pd_rd_wg%3Dro7Uw%26pd_rd_i%3D1732707103%26psc%3D1";
    firePreviewBtn.href = "https://read.amazon.com/kp/embed?asin=B07H4W5QKP&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_B8FJX9E0RJQNMBS2J0Z6";
  };
};

//lottie change button
let lottieChangeButtons = function(string) {
  if(string === "lottieBookOne") {
    lottieBuyBtn.href = "https://www.amazon.com/Pickin-Ground-Jeanetta-Britt/dp/1732707111/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=";
    lottieShareBtn.href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.amazon.com%2FPickin-Ground-Jeanetta-Britt%2Fdp%2F1732707111%2Fref%3Dtmm_pap_swatch_0%3F_encoding%3DUTF8%26qid%3D%26sr%3D";
    lottiePreviewBtn.href = "https://read.amazon.com/kp/embed?asin=B00KPIJ260&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_ZRKCXPX4ND1BV2ZJQ2KB";
  };
  if(string === "lottieBookTwo") {
    lottieBuyBtn.href = "https://www.amazon.com/gp/product/B00KP11ZV2/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i4";
    lottieShareBtn.href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB00KP11ZV2%2Fref%3Ddbs_a_def_rwt_hsch_vapi_tkin_p1_i4";
    lottiePreviewBtn.href = "https://read.amazon.com/kp/embed?asin=B00KP11ZV2&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_Y5ZMREJ7J1Y2KWW0FMW2";
  };
  if(string === "lottieBookThree") {
    lottieBuyBtn.href = "https://www.amazon.com/gp/product/B00KP1IJSO?notRedirectToSDP=1&ref_=dbs_mng_calw_2&storeType=ebooks";
    lottieShareBtn.href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB00KP1IJSO%3FnotRedirectToSDP%3D1%26ref_%3Ddbs_mng_calw_2%26storeType%3Debooks";
    lottiePreviewBtn.href = "https://read.amazon.com/kp/embed?asin=B00KP1IJSO&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_583GMPZJ0983VR2ZTX3E";
  };
};

//fireBookSelect
let fireBookSelector = function(e) {
  let ourTarget = e.target;
  if (ourTarget === fireBookBtnOne) {
    fireChangeImage("fireBookOne");
    fireChangeBody("fireBookOne");
    fireChangeButtons("fireBookOne");
  };
  if(ourTarget === fireBookBtnTwo) {
    fireChangeImage("fireBookTwo");
    fireChangeBody("fireBookTwo");
    fireChangeButtons("fireBookTwo");
  };
};

//lottie book select
let lottieBookSelector = function(e) {
  let ourTarget = e.target;
  if(ourTarget === lottieBtnOne){
    lottieChangeImage("lottieBookOne");
    lottieChangeBody("lottieBookOne");
    lottieChangeButtons("lottieBookTwo");
  };
  if(ourTarget === lottieBtnTwo){
    lottieChangeImage("lottieBookTwo");
    lottieChangeBody("lottieBookTwo");
    lottieChangeButtons("lottieBookTwo");
  };
  if(ourTarget === lottieBtnThree){
    lottieChangeImage("lottieBookThree");
    lottieChangeBody("lottieBookThree");
    lottieChangeButtons("lottieBookThree");
  };
}

//fire event listeners
fireBookBtnOne.addEventListener("click", fireBookSelector);
fireBookBtnTwo.addEventListener("click", fireBookSelector);
//lottie event listeners
lottieBtnOne.addEventListener("click", lottieBookSelector);
lottieBtnTwo.addEventListener("click", lottieBookSelector);
lottieBtnThree.addEventListener("click", lottieBookSelector);