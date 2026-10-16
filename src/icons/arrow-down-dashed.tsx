"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 5v.5m0 3v1.5m0 3v6"}],["path",{"d":"M18 13l-6 6"}],["path",{"d":"M6 13l6 6"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[0,2.4]}];

export const ArrowDownDashedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowDownDashedIcon.displayName = "ArrowDownDashedIcon";
