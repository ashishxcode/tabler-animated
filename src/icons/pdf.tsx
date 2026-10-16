"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2"}],["path",{"d":"M3 12h2a2 2 0 1 0 0 -4h-2v8"}],["path",{"d":"M17 12h3"}],["path",{"d":"M21 8h-4v8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[2],"a":0.24,"dl":0.1,"st":0.07,"os":[[18.5,12]]}];

export const PdfIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PdfIcon.displayName = "PdfIcon";
