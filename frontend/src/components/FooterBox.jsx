import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

const FooterBox = () => {
  return (
    <div className="fixed bottom-0 flex flex-row items-center    w-full">
      <div className="relative w-[100%] md:w-[83%]  ">
        <CKEditor 
        
        editor={ClassicEditor}
        />  <button className="bg-purple-900 text-white px-3 py-2 rounded justify-center absolute bottom-0 right-0">
        Send
      </button>
      </div>
    
    </div>
  );
};

export default FooterBox;
