"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 15h4"}],["path",{"d":"M10 15a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M22 22l-3 -3"}],["path",{"d":"M6 18h-1a2 2 0 0 1 -2 -2v-1"}],["path",{"d":"M3 11v-1"}],["path",{"d":"M3 6v-1a2 2 0 0 1 2 -2h1"}],["path",{"d":"M10 3h1"}],["path",{"d":"M15 3h1a2 2 0 0 1 2 2v1"}]];
const rig: Rig[] = [{"fx":"sweep","n":[0,1,2,3,4,5,6,7],"o":[12.5,12.5]}];

export const ZoomOutAreaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZoomOutAreaIcon.displayName = "ZoomOutAreaIcon";
