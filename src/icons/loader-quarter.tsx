"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 6l0 -3"}],["path",{"d":"M6 12l-3 0"}],["path",{"d":"M7.75 7.75l-2.15 -2.15"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1,2],"o":[7.5,7.5],"a":360}];

export const LoaderQuarterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LoaderQuarterIcon.displayName = "LoaderQuarterIcon";
