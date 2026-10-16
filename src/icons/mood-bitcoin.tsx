"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 21v-6m2 0v-1.5m0 9v-1.5m-2 -3h3m-1 0h.5a1.5 1.5 0 0 1 0 3h-3.5m3 -3h.5a1.5 1.5 0 0 0 0 -3h-3.5"}],["path",{"d":"M20.87 10.48a9 9 0 1 0 -7.876 10.465"}],["path",{"d":"M9 10h.01"}],["path",{"d":"M15 10h.01"}],["path",{"d":"M9.5 15c.658 .64 1.56 1 2.5 1c.357 0 .709 -.052 1.043 -.151"}]];
const rig: Rig[] = [{"fx":"tilt","n":[1],"o":[11.93,12],"a":-5},{"fx":"pop","n":[0,2,3,4],"a":0.3,"dl":0.12,"st":0.07,"os":[[18.5,18],[9,10],[15.01,10],[11.27,15.5]]}];

export const MoodBitcoinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodBitcoinIcon.displayName = "MoodBitcoinIcon";
