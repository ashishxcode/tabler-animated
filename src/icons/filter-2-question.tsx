"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h10.5"}],["path",{"d":"M9 18h5"}],["path",{"d":"M19 22v.01"}],["path",{"d":"M19 19c.448 -.001 .883 -.153 1.235 -.431c.352 -.278 .6 -.666 .706 -1.101c.105 -.436 .061 -.894 -.125 -1.302c-.186 -.408 -.504 -.742 -.902 -.948c-.398 -.204 -.853 -.267 -1.291 -.179c-.438 .088 -.834 .321 -1.123 .662"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4],"o":[19.25,18.51],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,6],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.25,12],[11.5,18]]}];

export const Filter2QuestionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Filter2QuestionIcon.displayName = "Filter2QuestionIcon";
