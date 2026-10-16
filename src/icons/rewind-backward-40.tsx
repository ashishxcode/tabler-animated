"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19.007 16.466a6 6 0 0 0 -4.007 -10.466h-11"}],["path",{"d":"M12 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0"}],["path",{"d":"M6 14v2a1 1 0 0 0 1 1h1"}],["path",{"d":"M9 14v6"}],["path",{"d":"M7 9l-3 -3l3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.5,11.23],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[13.5,17],[7,15.5],[9,17],[5.5,6]]}];

export const RewindBackward40Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RewindBackward40Icon.displayName = "RewindBackward40Icon";
