import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Text "mo:base/Text";

actor class canister2(){

  stable var entries : [(Text, Nat)] = Array.freeze<(Text, Nat)>(Array.init<(Text, Nat)>(10, ("", 0)));

  private let map = HashMap.fromIter<Text, Nat>(entries.vals(), 10, Text.equal, Text.hash);

  system func preupgrade(){
    entries := Iter.toArray(map.entries());
  };

  system func postupgrade(){
    entries := [];
  };

  public func test() : async Text {
    "nice to meet you"
  };

  public shared(msg) func putKV(text : Text, nat : Nat) : async Bool{
    map.put(text, nat);
    true
  };

  public query func getKV() : async [(Text, Nat)]{
    Iter.toArray(map.entries())
  };

  public query func greet(name : Text) : async Text {
    "hello " # name
  }; 

  public shared(msg) func getMC() : async Principal{
    msg.caller
  };

  public shared(msg) func getM() : async {caller : Principal} {
    msg
  };




};
