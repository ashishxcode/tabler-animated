"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.821 1.15"}],["path",{"d":"M16 16h-13a7 7 0 0 1 6.056 -6.937"}],["path",{"d":"M13 9h6.8"}],["path",{"d":"M12 19v2"}],["path",{"d":"M8 19l-1 2"}],["path",{"d":"M16 19l1 2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[5],"o":[16.5,20],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[14.91,9.99],[9.5,12.53],[16.4,9],[12,20],[7.5,20]]}];

export const IroningSteamOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
IroningSteamOffIcon.displayName = "IroningSteamOffIcon";
