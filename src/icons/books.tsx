"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"}],["path",{"d":"M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"}],["path",{"d":"M5 8h4"}],["path",{"d":"M9 16h4"}],["path",{"d":"M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"}],["path",{"d":"M14 9l4 -1"}],["path",{"d":"M16 16l3.923 -.98"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,4],"o":[13,12],"a":0.06},{"fx":"pop","n":[2,3,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,8],[11,16],[16,8.5],[17.96,15.51]]}];

export const BooksIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BooksIcon.displayName = "BooksIcon";
