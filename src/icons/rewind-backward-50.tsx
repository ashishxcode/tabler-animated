"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19.007 16.466a6 6 0 0 0 -4.007 -10.466h-11"}],["path",{"d":"M12 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0"}],["path",{"d":"M6 20h1.5a1.5 1.5 0 0 0 0 -3h-1.5v-3h3"}],["path",{"d":"M7 9l-3 -3l3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.5,11.23],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[13.5,17],[7.5,17],[5.5,6]]}];

export const RewindBackward50Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RewindBackward50Icon.displayName = "RewindBackward50Icon";
