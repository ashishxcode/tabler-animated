"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14.121 9.879l4.95 4.95"}],["path",{"d":"M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"}],["path",{"d":"M5 15h7"}],["path",{"d":"M12 9h7"}],["path",{"d":"M9.172 19.071l4.95 -4.949"}],["path",{"d":"M9.879 9.879l4.95 -4.95"}],["path",{"d":"M9 5v7"}],["path",{"d":"M15 12v7"}],["path",{"d":"M4.93 9.172l4.949 4.95"}],["path",{"d":"M15 12a3 3 0 1 1 -6 0a3 3 0 0 1 6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12.01,12.01],"a":0.06},{"fx":"pop","n":[0,2,3,4,5,6,7,8,9],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.6,12.35],[8.5,15],[15.5,9],[11.65,16.6],[12.35,7.4],[9,8.5],[15,15.5],[7.4,11.65],[12,12]]}];

export const ReferenceImageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ReferenceImageIcon.displayName = "ReferenceImageIcon";
