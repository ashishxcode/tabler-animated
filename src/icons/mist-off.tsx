"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 5h9"}],["path",{"d":"M3 10h7"}],["path",{"d":"M18 10h1"}],["path",{"d":"M5 15h5"}],["path",{"d":"M14 15h1m4 0h2"}],["path",{"d":"M3 20h9m4 0h3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[4],"o":[17.5,15],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.5,5],[6.5,10],[18.5,10],[7.5,15],[11,20]]}];

export const MistOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MistOffIcon.displayName = "MistOffIcon";
