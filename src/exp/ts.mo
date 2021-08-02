import List "mo:base/List";

module{

  //get elemnt E's preElement 
  //get push element
  public func getPreElement(list : List.List<Text>, ele_ : Text) : List.List<Text>{
    switch(list){
      case null { null };
      case (?(tEle, nl)){
        switch(nl){
          case null { null };
          case (?(nE, nnl)){
            if(nE == ele_){
              list
            }else{
              getPreElement(nl, ele_)
            }
          };
        }
      }
    }
  };

  public func deleteListElement(l : List.List<Text>, ele_ : Text) : List.List<Text>{
    var preElement = getPreElement(l, ele_);
    switch(preElement){
      case null { null };
      case (?(tE, nl)){
        switch(nl){
          case null { null };
          case (?(nE, nnl)){
            ?(tE, nnl)
          }
        }
      }
    }
  };
};
