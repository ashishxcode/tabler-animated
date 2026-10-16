"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 6l-7 0"}],["path",{"d":"M20 12l-9 0"}],["path",{"d":"M20 18l-7 0"}],["path",{"d":"M8 8l-4 4l4 4"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const IndentDecreaseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
IndentDecreaseIcon.displayName = "IndentDecreaseIcon";
