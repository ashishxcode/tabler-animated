"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"}],["path",{"d":"M4 6v6c0 1.657 3.582 3 8 3c1.118 0 2.183 -.086 3.15 -.241"}],["path",{"d":"M20 12v-6"}],["path",{"d":"M4 12v6c0 1.657 3.582 3 8 3c.157 0 .312 -.002 .466 -.005"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16l3 3l-3 3"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2,3,4,5],"st":0.12,"os":[[12,6],[9.57,10.5],[20,9],[8.23,16.5],[19,19],[20.5,19]]}];

export const DatabaseExportIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DatabaseExportIcon.displayName = "DatabaseExportIcon";
