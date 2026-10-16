"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8v-2a2 2 0 0 1 2 -2h2"}],["path",{"d":"M4 16v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M16 20h2a2 2 0 0 0 2 -2v-2"}],["path",{"d":"M9 10l.01 0"}],["path",{"d":"M15 10l.01 0"}],["path",{"d":"M9.5 15a3.5 3.5 0 0 0 5 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,6],"o":[12,12],"a":0.06},{"fx":"pop","n":[4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[9,10],[15.01,10]]}];

export const FaceIdIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FaceIdIcon.displayName = "FaceIdIcon";
