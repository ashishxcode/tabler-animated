"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.586 4.586a2 2 0 0 0 -1.414 -.586h-.172a2 2 0 0 0 -2 2v.172a2 2 0 0 0 .586 1.414a2 2 0 0 1 0 2.828a2 2 0 0 0 -.586 1.414v.344a2 2 0 0 0 .586 1.414c.4 .4 .595 .928 .585 1.452c-.01 .5 -.204 .995 -.585 1.376a2 2 0 0 0 -.586 1.414v.172a2 2 0 0 0 2 2h.172a2 2 0 0 0 1.414 -.586a2 2 0 0 1 2.828 0a2 2 0 0 0 1.414 .586h.344a2 2 0 0 0 1.414 -.586a2 2 0 0 1 2.828 0a2 2 0 0 0 1.414 .586h.172a2 2 0 0 0 2 -2v-.172a2 2 0 0 0 -.586 -1.414a1.996 1.996 0 0 1 0 -2.828a2 2 0 0 0 .586 -1.414v-.344a2 2 0 0 0 -.586 -1.414a2 2 0 0 1 0 -2.828a2 2 0 0 0 .586 -1.414v-.172a2 2 0 0 0 -2 -2h-.172a2 2 0 0 0 -1.414 .586a2 2 0 0 1 -2.828 0a2 2 0 0 0 -1.414 -.586h-.344a2 2 0 0 0 -1.414 .586a2 2 0 0 1 -2.828 0"}],["path",{"d":"M10 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M9 15c0 -1.105 .672 -2 1.5 -2h3c.828 0 1.5 .895 1.5 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,10],[12,14]]}];

export const EmailStampIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EmailStampIcon.displayName = "EmailStampIcon";
