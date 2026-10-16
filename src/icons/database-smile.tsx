"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 14h.01"}],["path",{"d":"M14 14h.01"}],["path",{"d":"M10 17a3.5 3.5 0 0 0 4 0"}],["path",{"d":"M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"}],["path",{"d":"M4 6v12c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-12"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2,3,4],"st":0.12,"os":[[10,14],[14.01,14],[12,17.31],[12,6],[12,13.5]]}];

export const DatabaseSmileIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DatabaseSmileIcon.displayName = "DatabaseSmileIcon";
