"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3l-11 11"}],["path",{"d":"M3 10v4h4"}],["path",{"d":"M17 10h4v4"}],["path",{"d":"M10 21l11 -11"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[2.4,0]}];

export const ArrowsDoubleSwNeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsDoubleSwNeIcon.displayName = "ArrowsDoubleSwNeIcon";
