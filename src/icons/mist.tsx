"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 5h3m4 0h9"}],["path",{"d":"M3 10h11m4 0h1"}],["path",{"d":"M5 15h5m4 0h7"}],["path",{"d":"M3 20h9m4 0h3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12.5],"a":0.06}];

export const MistIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MistIcon.displayName = "MistIcon";
