import List "mo:base/List";
import tools "./ts";

actor {
    var list = List.make<Text>("hello");
    
    public func greet() : async List.List<Text> {
      list := List.push<Text>("hello2", list);
      list := List.push<Text>("hello3", list);
      list := List.push<Text>("hello4", list);
      list := List.push<Text>("hello5", list);
      list := List.push<Text>("hello6", list);
      list := List.push<Text>("hello7", list);
      list := List.push<Text>("hello8", list);
      list := List.push<Text>("hello9", list);
      list
    };

    public func test() : async List.List<Text>{
      tools.deleteListElement(list, "hello3")
    };


};
