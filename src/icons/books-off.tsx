"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 9v10a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-14"}],["path",{"d":"M8 4a1 1 0 0 1 1 1"}],["path",{"d":"M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4"}],["path",{"d":"M13 13v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-10"}],["path",{"d":"M5 8h3"}],["path",{"d":"M9 16h4"}],["path",{"d":"M14.254 10.244l-1.218 -4.424a1.02 1.02 0 0 1 .634 -1.219l.133 -.041l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.236 11.75"}],["path",{"d":"M19.585 19.589l-1.572 .38c-.562 .136 -1.133 -.19 -1.282 -.731l-.952 -3.458"}],["path",{"d":"M14 9l4 -1"}],["path",{"d":"M19.207 15.199l.716 -.18"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[10],"o":[12,12],"dl":0.25},{"fx":"pop","n":[7,9],"o":[17.85,17.51],"a":0.35,"dl":0.2},{"fx":"draw","n":[0,2,3,6],"o":[12.75,12],"st":0.07}];

export const BooksOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BooksOffIcon.displayName = "BooksOffIcon";
