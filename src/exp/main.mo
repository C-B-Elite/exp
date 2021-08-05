import test "./canister2";
import Option "mo:base/Option";
import Debug "mo:base/Debug";

actor{

  type TestCanister = actor{
    putKV : (Text, Nat) -> async Bool;
    getKV : query () -> async [(Text, Nat)];
    greet : query (Text) -> async Text;
    getMC : () -> async Principal;
    getM : () -> async {caller : Principal};
  };

  private stable var testCanister : ?TestCanister = null;

  public func testGreet(name : Text) : async Text{
    await Option.unwrap<TestCanister>(testCanister).greet(name)
  };

  public shared func getSM() : async {caller : Principal}{
    Debug.print("before");
    await Option.unwrap<TestCanister>(testCanister).getM()
    Debug.print("hello")
    Debug.print(await Option.unwrap<TestCanister>(testCanister).getKV())
  };

  public shared func putKV(text : Text, nat : Nat) : async Bool{
    await Option.unwrap<TestCanister>(testCanister).putKV(text, nat)
  };
  
  public shared func getKV() : [(Text, Nat)]{
    await Option.unwrap<TestCanister>(testCanister).getKV()
  };


  public shared func getSMC() : async Principal{
    await Option.unwrap<TestCanister>(testCanister).getMC()
  };

  public shared(msg) func test_get_M() : async Principal{
     msg.caller
  };

  public query func getName() : async Text{
    "hello elite"
  };  

  public func newCanister(){
    testCanister := ?(await test.canister2());
  };


};
