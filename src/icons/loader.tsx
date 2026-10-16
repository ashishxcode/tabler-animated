"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 6l0 -3"}],["path",{"d":"M16.25 7.75l2.15 -2.15"}],["path",{"d":"M18 12l3 0"}],["path",{"d":"M16.25 16.25l2.15 2.15"}],["path",{"d":"M12 18l0 3"}],["path",{"d":"M7.75 16.25l-2.15 2.15"}],["path",{"d":"M6 12l-3 0"}],["path",{"d":"M7.75 7.75l-2.15 -2.15"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1,2,3,4,5,6,7],"o":[12,12],"a":360}];

export const LoaderIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LoaderIcon.displayName = "LoaderIcon";
