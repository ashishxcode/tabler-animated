"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 4l-18 0"}],["path",{"d":"M13 16l-6 0"}],["path",{"d":"M11 20l4 0"}],["path",{"d":"M6 8l14 0"}],["path",{"d":"M4 12l12 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3],"o":[12,6],"a":0.06},{"fx":"pop","n":[1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[10,16],[13,20],[10,12]]}];

export const TornadoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TornadoIcon.displayName = "TornadoIcon";
