"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 21h14"}],["path",{"d":"M6 18h2"}],["path",{"d":"M7 18v3"}],["path",{"d":"M9 11l3 3l6 -6l-3 -3l-6 6"}],["path",{"d":"M10.5 12.5l-1.5 1.5"}],["path",{"d":"M17 3l3 3"}],["path",{"d":"M12 21a6 6 0 0 0 3.715 -10.712"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3,6],"o":[12,13],"a":0.06},{"fx":"pop","n":[1,2,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,18],[7,19.5],[9.75,13.25],[18.5,4.5]]}];

export const MicroscopeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MicroscopeIcon.displayName = "MicroscopeIcon";
