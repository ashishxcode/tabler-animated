"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M4 4a16 16 0 0 1 16 16"}],["path",{"d":"M4 11a9 9 0 0 1 9 9"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,2],"st":0.13,"os":[[5,19],[8.5,15.5]]}];

export const RssIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RssIcon.displayName = "RssIcon";
